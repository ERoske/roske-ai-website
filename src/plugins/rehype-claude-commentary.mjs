/**
 * Rehype plugin that transforms bracketed Claude commentary paragraphs
 * into styled commentary blocks at build time.
 *
 * Detects paragraphs whose text starts with '[' and ends with ']',
 * strips the brackets, and wraps them in a styled div with a Claude label.
 * Handles both single-paragraph and multi-paragraph bracket blocks.
 */

import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

function getTextContent(node) {
  if (node.type === 'text') return node.value;
  if (node.children) return node.children.map(getTextContent).join('');
  return '';
}

function stripOpeningBracket(node) {
  if (node.type === 'text' && node.value.includes('[')) {
    node.value = node.value.replace('[', '');
    return true;
  }
  if (node.children) {
    for (const child of node.children) {
      if (stripOpeningBracket(child)) return true;
    }
  }
  return false;
}

function stripClosingBracket(node) {
  if (node.type === 'text' && node.value.includes(']')) {
    const idx = node.value.lastIndexOf(']');
    node.value = node.value.substring(0, idx) + node.value.substring(idx + 1);
    return true;
  }
  if (node.children) {
    for (let i = node.children.length - 1; i >= 0; i--) {
      if (stripClosingBracket(node.children[i])) return true;
    }
  }
  return false;
}

function makeLabel() {
  return h('div', { class: 'claude-commentary-label' }, [
    h('img', { src: '/images/claude-avatar.svg', alt: 'Claude', loading: 'lazy' }),
    'Claude'
  ]);
}

export default function rehypeClaudeCommentary() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // Only process direct children of the root (top-level elements)
      if (!parent || parent.type !== 'root') return;
      if (node.tagName !== 'p') return;

      const text = getTextContent(node);
      const trimmed = text.trim();

      // Single-paragraph commentary
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        stripOpeningBracket(node);
        stripClosingBracket(node);

        const wrapper = h('div', { class: 'claude-commentary' }, [
          makeLabel(),
          node
        ]);

        parent.children[index] = wrapper;
        return;
      }

      // Multi-paragraph commentary: starts with [ but doesn't end with ]
      if (trimmed.startsWith('[') && !trimmed.endsWith(']')) {
        stripOpeningBracket(node);

        const collected = [node];
        let endIdx = index;

        // Collect subsequent siblings until we find one ending with ]
        for (let j = index + 1; j < parent.children.length; j++) {
          const sibling = parent.children[j];
          const sibText = getTextContent(sibling).trim();
          collected.push(sibling);
          endIdx = j;

          if (sibText.endsWith(']')) {
            stripClosingBracket(sibling);
            break;
          }
        }

        const wrapper = h('div', { class: 'claude-commentary' }, [
          makeLabel(),
          ...collected
        ]);

        // Replace the range [index..endIdx] with the single wrapper
        parent.children.splice(index, endIdx - index + 1, wrapper);
        return;
      }
    });
  };
}
