import React from 'react'
import Img from "../../../assest/image/img.svg"
import fingerPrint from "../../../assest/image/framePrint.svg"

const FilesAndDocument = () => {
    return (
        <>
            <div className="files_container">
                <h1>Files & Documents</h1>
                <div className="single_doc">
                    <img src={Img} alt=""/>
                    <p>
                    passport img.jpg
                    </p>
                </div>
                
                <div className="fingerPrint_box">
                    <div className="single_doc">
                        <img src={fingerPrint} alt=""/>
                        <p>
                        passport img.jpg
                        </p>
                    </div>

                    <div className="single_doc">
                        <img src={fingerPrint} alt=""/>
                        <p>
                        passport img.jpg
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FilesAndDocument
