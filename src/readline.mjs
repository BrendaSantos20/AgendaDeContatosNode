import {createInterface} from "node:readline/promises"
import {stdin, stdout} from "node:process";

export const read = createInterface ({ input:stdin, output: stdout });