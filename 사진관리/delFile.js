const fs = require('fs');
const path = require('path');

function deleteFilesWithSensitiveNames(dirPath) {
  // 현재 폴더 내의 모든 파일과 폴더 목록을 가져옵니다.
  const files = fs.readdirSync(dirPath);

  // 모든 파일을 확인하여 "[기밀]"이 포함된 파일인 경우 삭제합니다.
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();
    if (!isDirectory && file.includes('[기밀]')) {
      const newFilePath = filePath.replace('[기밀]', '');
      fs.renameSync(filePath, newFilePath);
      console.log(`Renamed file: ${filePath} -> ${newFilePath}`);
    } else if (isDirectory) {
      // 하위 폴더가 있을 경우 해당 폴더에 대해 재귀적으로 함수를 호출합니다.
      deleteFilesWithSensitiveNames(filePath);
    }
  }
}

// 삭제 대상 파일이 있는 폴더 경로를 입력합니다.
const targetDirectory = '../새 폴더';

deleteFilesWithSensitiveNames(targetDirectory);