[
 "("
 ")"
] @punctuation.bracket

(VERSION_NUMBER) @number

[
 "VERSION"
 "MIN"
 "MAX"
 "LIB"
 "EXE"
 "LINK"
 "DIR"
 "FILE"
] @parameter

[
 "compiler"
 "project"
 "require"
 "find"
 "option"
 "cmd"
 "program"
 "create"
 "copy"
 "print"
 "remove"
 "add"
] @function.call

[
 "ifdef"
 "endif"
 "task"
 "endtask"
] @keyword

(STRING) @string

(COMMENT) @comment
