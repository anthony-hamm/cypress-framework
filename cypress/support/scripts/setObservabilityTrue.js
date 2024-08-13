import {readFileSync, writeFileSync} from 'fs'
const paths = [
  './browserstack-cc/browserstack.json',
  './browserstack-mc/browserstack.json',
  './browserstack-wfc/browserstack.json',
]
function updateTestObservability(filePath) {
  try {
    const config = JSON.parse(readFileSync(filePath, 'utf-8'))
    config.testObservability = true
    writeFileSync(filePath, JSON.stringify(config, null, 2))
    console.log(
      `Updated ${filePath}: testObservability set to ${config.testObservability}`,
    )
  } catch (error) {
    console.error(`Failed to update ${filePath}: ${error.message}`)
  }
}
paths.forEach(updateTestObservability)
