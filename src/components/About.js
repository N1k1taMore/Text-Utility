import React,{useState} from 'react'

export default function About(){

    const[myStyle,setmyStyle]=useState(
    {
        color:'black',
        backgroundColor:'white',
        border:'1px solid white'
    })
    const [btnText,setBtnText]=useState("Enable Dark Mode")
    const togglestyle=()=>{
        if(myStyle.color==='black'){
            setmyStyle({           
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setmyStyle({          
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }

    return (
        <div className="container" style={myStyle}>
            <h2 className="my-2">About Us</h2>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item" >
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently.Be it word
                   count,character count or time required to read it.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}>
                    Textutils is a free character counter tool that provides instant character count
                    and word count statistics for a given text.Textutils reports the number of words
                    and characters.Thus it is suitable for writing text with wotd/character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web Browser such as Chrome,Firefox,Internet
                    Explorer,Safari,Opera.It suits to count characters in facebook,blog,books,excel document,
                    pdf document,essays,etc.
                </div>
                </div>
            </div>
            </div>
            <div className="conatiner">
                <button onClick={togglestyle} className="btn-btn-primary ">{btnText}</button>
            </div>
        </div>
    )
}
