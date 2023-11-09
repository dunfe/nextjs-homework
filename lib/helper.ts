export const toSlug = str => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  var to = 'aaaaeeeeiiiioooouuuunc------';

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

export const textToDocument = (text: string) => {
    return {
        nodeType: 'document',
        data: {},
        content: [
            {
                nodeType: 'paragraph',
                content: [
                    {
                        nodeType: 'text',
                        marks: [],
                        value: text,
                        data: {},
                    },
                ],
                data: {},
            },
        ],
    }
}
