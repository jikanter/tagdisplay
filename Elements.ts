

/* A simple set implementation */
interface Set {
  items: Object
}

function Add(s: Set, i: string) {
  if (s.items[i]) {
    return null;
  }
  s.items[i] = {};
  return i;
}

function Contains(s: Set, i: string) {
  return s.items[i];
}

function Union(s1: Set, s2: Set) {
  var newSet = s1;
  var i;
  for (i in s2.items) {
    if (!Contains(newSet, i)) {
      newSet.items[i] = {};
    }
  }
  return newSet;
}

function Intersection(s1: Set, s2: Set) {
  var i;
  var newSet = {items: {}};
  for (i in s1.items) {
     if (Contains(s2, i)) {
       newSet.items[i] = {};
     }
  }
  return newSet;
}

function ExclusiveOr(s1: Set, s2: Set) {
  var newSet = s1;
  var i;
  for (i in s2.items) {
    if (Contains(newSet, i)) {
      delete newSet.items[i];
    }
    else {
      newSet.items[i] = {};
    }
  }
  return newSet;
}

interface TagDescriptionElement {
  name: string,
  attributes: Array<Object>,
}

var ReferenceLink = 'http://www.w3.org/TR/html5/index.html#elements-1';

var GlobalAttributes = ['accesskey', 'class', 'contenteditable', 'dir', 'hidden', 'id', 'lang', 'spellcheck', 'style', 'tabindex', 'title', 'translate'];
var Elements = {
  'a': GlobalAttributes.concat(['href', 'target', 'download', 'rel', 'hreflang', 'type']),
  'abbr': GlobalAttributes,
  'address': GlobalAttributes,
  'area': GlobalAttributes.concat(['alt', 'coords', 'shape', 'href', 'target', 'download', 'rel', 'hreflang', 'type']),
  'article': GlobalAttributes,
  'aside': GlobalAttributes,
  'audio': GlobalAttributes.concat(['src', 'crossorigin', 'preload', 'autoplay', 'mediagroup', 'loop', 'muted', 'controls']),
  'b': GlobalAttributes,
  'base': GlobalAttributes.concat(['href', 'target']),
  'bdi': [],
  'bdo': [],
  'blockquote': [],
  'body': [],
  'br': [],
  'button': [],
  'canvas': [],
  'caption': [],
  'cite': [],
  'col': [],
  'colgroup': [],
  'data': [],
  'datalist': [],
  'dd': [],
  'del': [],
  'dfn': [],
  'div': [],
  'dl': [],
  'dt': [],
  'em': [],
  'embed': [],
  'fieldset': [],
  'figcaption': [],
  'figure': [],
  'footer': [],
  'form': [],
  'h1': [],
  'h2': [],
  'h3': [],
  'h4': [],
  'h5': [],
  'h6': [],
  'hr': [],
  'html': [],
  'i': [],
  'iframe': [],
  'img': [],
  'input': [],
  'ins': [],
  'kbd': [],
  'keygen': [],
  'label': [],
  'legend': [],
  'head': [],
  'header': [],
  'li': [],
  'link': [],
  'main': [],
  'map': [],
  'mark': [],
  'meta': [],
  'meter': [],
  'nav': [],
  'noscript': [],
  'object': [],
  'optgroup': [],
  'output': [],
  'p': [],
  'param': [],
  'pre': [],
  'progress': [],
  'q': [],
  'rb': [],
  'rp': [],
  'rt': [],
  'rtc': [],
  'ruby': [],
  's': [],
  'samp': [],
  'script': [],
  'section': [],
  'select': [],
  'small': [],
  'source': [],
  'span': [],
  'strong': [],
  'style': [],
  'sub': [],
  'sup': [],
  'table': [],
  'tbody': [],
  'td': [],
  'template': [],
  'textarea': [],
  'tfoot': [],
  'th': [],
  'thead': [],
  'time': [],
  'title': [],
  'tr': [],
  'track': [],
  'u': [],
  'ul': [],
  'var': [],
  'video': [],
  'wpr': []
};

var InterfaceMap = {
  'HTMLAnchorElement': [],
  'HTMLElement': []
};
