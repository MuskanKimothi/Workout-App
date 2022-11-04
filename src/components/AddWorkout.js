import React, {useState} from 'react'

export default function AddWorkout() {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [cburn, setCburn] = useState()
    const [description, setDescription] = useState()
   

    const handleTitleChange = (e) => {
        console.log('Change event.. ', e.target.value)
        setTitle(e.target.value)
    }
    const addWorkout = () => {
        console.log('Add workout.. ', title , cburn, description )
        //http post
        fetch('http://localhost:8000/workouts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title , cburn, description})
        })
        .then(res =>{
            console.log(res);
            if(res.status == 201){
                setMessage('Workout added successfully!')
            }
        })
      
    }
    return (
        <div>
            {message && <div class="alert alert-success" role="alert">
  {message}
</div>}
            
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Title</span>
                <input  type="text" value={title} onChange={handleTitleChange} className="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Calories Burn</span>
                <input  type="number" value={cburn} onChange={(e)=>setCburn(e.target.value)} className="form-control" placeholder="Enter calory burn" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Description</span>
                <input  type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Enter description" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
               <button onClick={addWorkout} className='btn btn-primary'>Add Workout</button>
            </div>
        </div>
    )
}
