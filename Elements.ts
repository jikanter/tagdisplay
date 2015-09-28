/* A simple set implementation. Unecessary for es6 because of native set */
interface Set {
  items: Object
}

/* the interface for a polyfill that implements a given functionality
// should implement the methods parse to parse the data stored into source
// into the object elements */
interface PolyFill {
  name: string,
  source: string,
  parse: Function,
  elements: Object,
  browsersThatRequireThis: Set // the browsers that need this polyfill
}


interface TagDescriptionElement {
  name: string,
  attributes: Array<Object>,
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
  'bdi': [GlobalAttributes],
  'bdo': [GlobalAttributes],
  'blockquote': [GlobalAttributes.concat('cite')],
  'body': [GlobalAttributes.concat('onafterprint', 'onbeforeprint', 'onbeforeunload', 'onhashchange', 'onmessage', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onstorage', 'onunload')],
  'br': [GlobalAttributes],
  'button': [GlobalAttributes.concat('autofocus', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'name', 'type', 'value')],
  'canvas': [GlobalAttributes.concat('width', 'height')],
  'caption': [GlobalAttributes],
  'cite': [GlobalAttributes],
  'col': [GlobalAttributes.concat('span')],
  'colgroup': [GlobalAttributes.concat('span')],
  'data': [GlobalAttributes.concat('value')],
  'datalist': [GlobalAttributes],
  'dd': [GlobalAttributes],
  'del': [GlobalAttributes.concat('cite', 'datetime')],
  'dfn': [GlobalAttributes],
  'div': [GlobalAttributes],
  'dl': [GlobalAttributes],
  'dt': [GlobalAttributes],
  'em': [GlobalAttributes],
  'embed': [GlobalAttributes.concat('src', 'type', 'width', 'height', '<any>*')],
  'fieldset': [GlobalAttributes.concat('disabled', 'form', 'name')],
  'figcaption': [GlobalAttributes],
  'figure': [GlobalAttributes],
  'footer': [GlobalAttributes],
  'form': [GlobalAttributes.concat('accept-charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novalidate', 'target')],
  'h1': [GlobalAttributes],
  'h2': [GlobalAttributes],
  'h3': [GlobalAttributes],
  'h4': [GlobalAttributes],
  'h5': [GlobalAttributes],
  'h6': [GlobalAttributes],
  'head': [GlobalAttributes],
  'header': [GlobalAttributes],
  'hr': [GlobalAttributes],
  'html': [GlobalAttributes.concat('manifest')],
  'i': [GlobalAttributes],
  'iframe': [GlobalAttributes.concat('src', 'srcdoc', 'name', 'sandbox', 'width', 'height')],
  'img': [GlobalAttributes.concat('alt', 'src', 'crossorigin', 'usemap', 'ismap', 'width', 'height')],
  'input': [GlobalAttributes.concat('accept', 'alt', 'autocomplete', 'autofocus', 'checked', 'dirname', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'height', 'list', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'src', 'step', 'type', 'value', 'width')],
  'ins': [GlobalAttributes.concat('cite', 'datetime')],
  'kbd': [GlobalAttributes],
  'keygen': [GlobalAttributes.concat('autofocus', 'challenge', 'disabled', 'form', 'keytype', 'name')],
  'label': [GlobalAttributes.concat('form', 'for')],
  'legend': [GlobalAttributes],
  'li': [GlobalAttributes.concat('value')],
  'link': [GlobalAttributes.concat('href', 'crossorigin', 'rel', 'media', 'hreflang', 'type', 'sizes')],
  'main': [GlobalAttributes],
  'map': [GlobalAttributes.concat('name')],
  'mark': [GlobalAttributes],
  'meta': [GlobalAttributes.concat('name', 'http-equiv', 'content', 'charset')],
  'meter': [GlobalAttributes.concat('value', 'min', 'max', 'low', 'high', 'optimum')],
  'nav': [GlobalAttributes],
  'noscript': [GlobalAttributes],
  'object': [GlobalAttributes.concat('date', 'type', 'typemustmatch', 'name', 'usemap', 'form', 'width', 'height')],
  'ol': [GlobalAttributes.concat('reversed', 'start', 'type')],
  'optgroup': [GlobalAttributes.concat('disabled', 'label')],
  'option': [GlobalAttributes.concat('disabled', 'label', 'selected', 'value')],
  'output': [GlobalAttributes.concat('for', 'form', 'name')],
  'p': [GlobalAttributes],
  'param': [GlobalAttributes.concat('name', 'value')],
  'pre': [GlobalAttributes],
  'progress': [GlobalAttributes.concat('value', 'max')],
  'q': [GlobalAttributes.concat('cite')],
  'rb': [GlobalAttributes],
  'rp': [GlobalAttributes],
  'rt': [GlobalAttributes],
  'rtc': [GlobalAttributes],
  'ruby': [GlobalAttributes],
  's': [GlobalAttributes],
  'samp': [GlobalAttributes],
  'script': [GlobalAttributes.concat('src', 'type', 'charset', 'async', 'defer', 'crossorigin')],
  'section': [GlobalAttributes],
  'select': [GlobalAttributes.concat('autofocus', 'disabled', 'form', 'multiple', 'name', 'required', 'size')],
  'small': [GlobalAttributes],
  'source': [GlobalAttributes.concat('src', 'type', 'media')],
  'span': [GlobalAttributes],
  'strong': [GlobalAttributes],
  'style': [GlobalAttributes.concat('media', 'type')],
  'sub': [GlobalAttributes],
  'sup': [GlobalAttributes],
  'table': [GlobalAttributes.concat('border')],
  'tbody': [GlobalAttributes],
  'td': [GlobalAttributes.concat('colspan', 'rowspan', 'header')],
  'template': [GlobalAttributes],
  'textarea': [GlobalAttributes.concat('autofocus', 'cols', 'dirname', 'disabled', 'form', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'wrap')],
  'tfoot': [GlobalAttributes],
  'th': [GlobalAttributes.concat('colspan', 'rowspan', 'headers', 'scope', 'abbr')],
  'thead': [GlobalAttributes],
  'time': [GlobalAttributes.concat('datetime')],
  'title': [GlobalAttributes],
  'tr': [GlobalAttributes],
  'track': [GlobalAttributes.concat('default', 'kind', 'label', 'src', 'srclang')],
  'u': [GlobalAttributes],
  'ul': [GlobalAttributes],
  'var': [GlobalAttributes],
  'video': [GlobalAttributes.concat('src', 'crossorigin', 'poster', 'preload', 'autoplay', 'mediagroup', 'loop', 'muted', 'controls', 'width', 'height')],
  'wpr': [GlobalAttributes]
};

var InterfaceMap = {
  'HTMLAnchorElement': [],
  'HTMLElement': []
};
