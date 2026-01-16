module.exports = grammar({
  name: "c3_build_file",
  filenames: [ 'C3BuildFile' ],
  extras: $ => [
    /\s|\r?\n/
  ],
  rules: {
    source_file: $ => repeat($.statement),
    statement: $ => choice(
      $.compiler,
      $.project,
      $.require,
      $.find,
      $.ifdef,
      $.option,
      $.task,
      $.cmd,
      $.program,
      $.create,
      $.copy,
      $.print,
      $.remove,
      $.add,
      $.var,
      $.COMMENT
    ),
    compiler: $ => seq(
      "compiler",
      "(",
      "VERSION",
      $._version_spec,
      ")"
    ),
    project: $ => seq(
      "project",
      "(",
      $.IDENT,
      optional(seq(
        "VERSION",
        $.exact_version
      )),
      ")"
    ),
    require: $ => seq(
      "require",
      "(",
      choice(
        "EXE",
        "LIB"
      ),
      $.STRING,
      ")"
    ),
    find: $ => seq(
      "find",
      "(",
      choice(
        "EXE",
        "LIB"
      ),
      $.STRING,
      ")"
    ),
    ifdef: $ => seq(
      "ifdef",
      "(",
      $.IDENT,
      ")",
      repeat($.statement),
      "endif",
      "(",
      ")"
    ),
    option: $ => seq(
      "option",
      "(",
      $.STRING,
      ")"
    ),
    task: $ => seq(
      "task",
      "(",
      $.STRING,
      ")",
      repeat($.statement),
      "endtask",
      "(",
      ")"
    ),
    cmd: $ => seq(
      "cmd",
      "(",
      $.STRING,
      ")"
    ),
    program: $ => seq(
      "program",
      "(",
      $.IDENT,
      optional(seq(
        "LINK",
        repeat1($.IDENT)
      )),
      ")"
    ),
    create: $ => seq(
      "create",
      "(",
      choice(
        "DIR",
        "FILE"
      ),
      $.STRING,
      ")"
    ),
    copy: $ => seq(
      "copy",
      "(",
      choice(
        "DIR",
        "FILE"
      ),
      $.STRING,
      $.STRING,
      ")"
    ),
    print: $ => seq(
      "print",
      "(",
      $.STRING,
      ")"
    ),
    remove: $ => seq(
      "remove",
      "(",
      choice(
        "DIR",
        "FILE",
      ),
      $.STRING,
      ")"
    ),
    add: $ => seq(
      "add",
      "(",
      repeat1($.STRING),
      ")"
    ),
    var: $ => seq(
      $.IDENT,
      "=",
      $.STRING
    ),
    _version_spec: $ => choice(
      $.exact_version,
      $.min_version,
      $.max_version,
      $.version_range
    ),
    exact_version: $ => $.VERSION_NUMBER,
    min_version: $ => seq(
      'MIN',
      $.VERSION_NUMBER
    ),
    max_version: $ => seq(
      'MAX',
      $.VERSION_NUMBER
    ),
    version_range: $ => seq(
      'MIN',
      $.VERSION_NUMBER,
      'MAX',
      $.VERSION_NUMBER
    ),
    VERSION_NUMBER: $ => /[0-9]+\.[0-9]+\.[0-9]+/,
    STRING: $ => seq(
      '"',
      repeat(choice(
        $.STRING_CONTENT,
        $.ESCAPE_SEQUENCE
      )),
      '"'
    ),
    STRING_CONTENT: $ => /[^\"\\]+/,
    ESCAPE_SEQUENCE: $ => /\\[\\\"'nrtbfv]/,
    IDENT: $ => /[a-zA-Z][a-zA-Z_0-9]*/,
    COMMENT: $ => /--[^\n]*/
  }
});
