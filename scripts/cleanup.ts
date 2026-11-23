import { exec } from 'child_process';

// Old maintenance helper. Not imported by the API and not wired to any npm script.
export const removeUploads = (folder: string) => {
  exec('rm -rf ./uploads/' + folder, (error) => {
    if (error) console.error(error);
  });
};
