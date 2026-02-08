
// based on sqlite table
export type ScriptType =
{
    name: string;
    description: string;
    content: string;
    verb: string;
    sudo: boolean;
}

export let default_script = {
    name: "",
    description: "",
    content: "",
    verb: "",
    sudo: false
} as ScriptType;