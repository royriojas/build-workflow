{{
  var
    fontData = it.fontData || {}, 
    name = fontData.name,
    prefix = fontData.prefix;
}}

.kwl-if-props() {
  font-family: '{{= name }}';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;

  // Better Font Rendering
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.kwl-icon-code(@content, current) {
  content:@content;
}

.kwl-icon-code(@content, before) {
  &:before {
    content:@content;
  }
}

.kwl-icon-code(@content, after) {
  &:after {
    content:@content;
  }
}

.kwl-icon-code-prop(@content, current) {
 .kwl-if-props();
  content:@content;
}

.kwl-icon-code-prop(@content, before) {
  &:before {
 .kwl-if-props();
    content:@content;
  }
}

.kwl-icon-code-prop(@content, after) {
  &:after {
 .kwl-if-props();
    content:@content;
  }
}

{{~ fontData.icons :icon:index }}
{{
  var
    iconName = icon.className,
    iconProp = '@'+ iconName + '-code',
    iconCode = icon.hexCode;
}}
// ======================================================================
// {{=iconProp }}
// ======================================================================

// less variable for {{=iconName }}
{{=iconProp }}:"{{=iconCode}}";

// mixin for {{=iconName }}
.mxn-{{=iconName }}(@insert-at:current) when not(@insert-at = props) {
  .kwl-icon-code({{=iconProp}}, @insert-at);
}
.mxn-{{=iconName }}(props, @insert-at:current) {
  .kwl-icon-code-prop({{=iconProp}}, @insert-at);
}
{{~}}