// The root filesystem location
export const diskImageUrl = IMAGE_URL;
// The root filesystem backend type
export const diskImageType = "github";
// Print an introduction message about the technology
export const printIntro = true;
// Is a graphical display needed
export const needsDisplay = false;
// Executable full path (Required)
export const cmd  = CMD;  // ["/bin/bash"] vindo do workflow
export const args = ARGS; // normalmente []
export const opts = {
  env: ENV,               // ["HOME=/home/user","TERM=xterm","USER=root",...]
  cwd: CWD,               // "/home/user"
  uid: 0,                 // <<< root
  gid: 0,                 // <<< root
};