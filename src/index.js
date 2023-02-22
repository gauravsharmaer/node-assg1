const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	
	const filewrite=await fs.writeFile("File.txt","hello",()=>{

	});
}
myFileWriter();

const myFileReader = async (fileName) => {
	
	let readdata = await fs.readFile(fileName, "utf-8",()=>{

	})
	console.log(readdata);

}
myFileReader("file.txt");


const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile('File.txt',' World',()=>{

	})
}
myFileUpdater();




const myFileDeleter = async (fileName) => {
	await fs.unlink('File.txt')


}
// myFileDeleter();


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }