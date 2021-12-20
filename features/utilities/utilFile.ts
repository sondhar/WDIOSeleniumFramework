import fs from 'fs'

class FolderUtils {

    deleteFolder(path: string) {

        fs.rmdirSync(path, { recursive: true })

    }

}

export default new FolderUtils()