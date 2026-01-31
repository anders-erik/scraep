
import fs from 'fs';
import path from 'node:path';


/** Parse file as json using absolute path to file. */
export function read_json_file_abs(file_path: string): Promise<any>
{
    return new Promise((resolve, reject) => 
    {
        fs.readFile(file_path, 'utf-8', (err, data) =>
        {
            if (err) {
                reject(err);
                return;
            }

            try {
                const json = JSON.parse(data);
                resolve(json);
            } catch (parseErr) {
                reject(parseErr);
            }
        });
    });
}

export async function read_json_file_rel(file_path: string): Promise<any>
{
    return new Promise((resolve, reject) => 
    {
        const file_path_full = path.join(__dirname, file_path);

        resolve(read_json_file_abs(file_path_full));
    });
}