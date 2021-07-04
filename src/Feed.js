import React,{ useState, useEffect } from 'react';
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import  firebase from './firebase';

function Feed() {

    const [input, setInput] = useState('');

    const  [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc")
                               .onSnapshot((snapshot => 
            setPosts(
                snapshot.docs.map((doc=> (
                {
                id : doc.id,
                data: doc.data(),
            }
            ))
            )
        )))

    },[]);

    const sendPost =(e)=> {
        e.preventDefault();

    db.collection('posts').add({
        name: 'Manas sahoo ',
        description : 'this is a test',
        message : input,
        photourl : "",
        timestamp : firebase.firestore.FieldValue.serverTimestamp()

    });
    setInput ("");

    };


    return (
        <div className = "feed"> 
        <div className = "feed_InputContainer">
            <div className = "feed_input">
            <CreateIcon/>
            <form >
                <input  value = {input} onChange = { e => setInput(e.target.value) }type ="text"  placeholder ="start a post"/>
                    <button onClick ={sendPost} type ="submit">send</button>

                    </form>
                    </div>
                    <div className = "feed_InputOption">
                      <InputOption Icon ={ImageIcon} title = "photo" color = "#70b5f9"/>
                      <InputOption Icon ={SubscriptionsIcon} title = "video" color = "#E7A33E"/>
                      <InputOption Icon ={EventNoteIcon} title = "Event" color = "#C0CBCD"/>
                      <InputOption Icon ={CalendarViewDayIcon} title = "Write article" color = "#7FC15E"/>
                    
                        </div>
            </div>
            {/*Post  */}

            {posts.map(( { id, data: { name, description,message,photourl } })=>(
                <Post
                key = {id}
                name = {name}
                description = {description}
                message = {message} 
                photourl = {photourl}/>
            ))}



            <Post 
    
            name = "manas sahoo"
            description ="this is a test"
            message = "this orks" 
         />

        </div>
    )
}

export default Feed;
