{{
  var
    fontData = it.fontData || {},
    name = fontData.name,
    prefix = fontData.prefix,
    mixinsFile = it.mixinsFile;
}}
@import '{{=mixinsFile}}';

@font-face {
  font-family: '{{= name }}';
  src:url('fonts/{{= name }}.eot?y6en6y');
  src:url('fonts/{{= name }}.eot?#iefixy6en6y') format('embedded-opentype'),
    url('fonts/{{= name }}.woff?y6en6y') format('woff'),
    url('fonts/{{= name }}.ttf?y6en6y') format('truetype'),
    url('fonts/{{= name }}.svg?y6en6y#KWL-Font') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="{{=prefix}}"], [class*=" {{=prefix}}"], .{{=prefix}}font-props {
  &:before,
  &:after {
    .{{=prefix}}props();
  }
}

.ico {
  margin-right: .5em;
  margin-left: .5em;
}

{{~ fontData.icons :icon:index }}
{{
  var
    iconName = icon.className,
    iconProp = '@'+ prefix + 'code-' + iconName,
    iconCode = icon.hexCode;
}}
// ======================================================================
// {{=iconProp }}
// ======================================================================

// class for {{=iconName }}
.{{= iconName }} {
  .mxn-{{=iconName }}(before);
}
{{~}}