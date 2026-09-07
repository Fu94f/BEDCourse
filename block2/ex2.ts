//Define a downloadFunction callback type.
//  Create an arrow function that takes a URL string and a callback of that type,
//  waits 2 seconds via setTimeout,
//  then calls the callback with 'Downloaded data from <URL>'.


type DownloadFunction = (fileContent: string) => void;

const downloadFile = (url: string, handleDownload: DownloadFunction) => {
    console.log("Starting the download from", url);
    setTimeout(() => {
        const fileContent =`Dowloaded data from ${url}`;
        handleDownload(fileContent);
    }, 2000);

};

const handleDownload = (fileContent: string) => {
    console.log (fileContent);

};

downloadFile("http//example.com/file.txt", handleDownload);



