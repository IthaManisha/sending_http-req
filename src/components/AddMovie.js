import React,{useState} from "react";
import classes from './AddMovie.module.css'


const AddMovie=(props)=>{
    const[title,setTitle]=useState('');
    const[openingText,setOpeningText]=useState('');
    const[releaseDate,setReleaseDate]=useState('');
    const titleHandler=(event)=>{
     setTitle(event.target.value);
    }
    const textHandler=(event)=>{
        setOpeningText(event.target.value);
    }
    const dateHandler=(event)=>{
        setReleaseDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const movie={
            title:title,
            openingText:openingText,
            releaseDate:releaseDate
        }
        props.onAddMovie(movie);
        setTitle('');
        setOpeningText('');
        setReleaseDate('');
    }
    return(
        <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' value={title} onChange={titleHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text'value={openingText} onChange={textHandler}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' value={releaseDate} onChange={dateHandler} />
      </div>
      <button>Add Movie</button>
    </form>
    )
}
export default AddMovie