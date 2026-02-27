
// based on sqlite table
export type RunningScript =
{
    name: string;
    description: string;
    content: string;
    verb: string;
    sudo: boolean;
}

export let default_running_Script = {
    name: "",
    description: "",
    content: "",
    verb: "",
    sudo: false
} as RunningScript;