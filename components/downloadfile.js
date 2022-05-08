
const DownloadFile = ({url}) => {
    return <div style={{display: 'none'}}>
                <iframe src={url} />
            </div>
}

export default DownloadFile;