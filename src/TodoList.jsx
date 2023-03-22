// Importaciones correspondientes para el uso de las librerias mencionadas en el problema a resolver
import react, { useState } from 'react';
import {Container, Form, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// La funcion principal en donde se encuentra toda la logica a utilizar

function TodoList(){
    // *********************DECLARACIONES******************
    // task esta referido al array de tareas que vamos a ir registrando y al lado su funcion controladora 
    const [task,setTasks] = useState([]);

    //Este es el input en donde vamos a guardar el valor que ingrese el usuario
    const [inputValue, setInputValue] = useState('');

    //Iniciamos la constante donde vamos a almacenar la cantidad de tareas y su funcion controladora

    const [count, setCount] = useState(0);

    // Fucion en donde capturamos el valor del input y lo seteamos
    const handleInputChange = (event) =>{
        
        setInputValue(event.target.value);
    };
    //Esta funcion agrega siempre y cuando no encuentre el valor del input vacio ya que arriba lo declaramos vacio
    const handleAddTask = (event) =>{
        event.preventDefault();
        
        if(inputValue.trim() !== ''){
            setTasks([...task, { name: inputValue, completed: false }]);
            setInputValue('');
            setCount(count+1);
        }
    };

    const handleTaskClik = (index) =>{

        
        const copyTask = [...task];

        copyTask[index].completed = !copyTask[index].completed;
        setTasks(copyTask);
        if(copyTask[index].completed==false){
            setCount(count+1)
        }else{
            if (count != 0)setCount(count-1);
        }
        
        
    }
    
    
    return (
        <div>
            {/* Utilizamos la libreria react-bootstrap combinada con bootstrap para darle estilos */}
            <Container className='my-5'>
               <h2 className='text-center mb-5'>TodoList</h2>

                <Form onSubmit={handleAddTask}>
                    <Form.Group className='mb-3'>
                      <Form.Control
                        type='text'
                        placeholder='Add task'
                        value={inputValue}
                        onChange={handleInputChange} 
                      ></Form.Control>
                      <Button variant='primary' type='submit' className='my-3'>Add</Button>
                    </Form.Group>
                </Form>
                <ListGroup>
                    {
                        task.map((task,index) => (
                            <ListGroupItem
                            className={`${task.completed ? 'text-decoration-line-through' : ''}`}
                            key={index}
                            onClick={() => {handleTaskClik(index)}}
                            >{task.name} </ListGroupItem>

                        ))
                    }
                </ListGroup>
                    <div className='text-center my-3'>{count} task remaning</div>
            </Container>

            
            
        </div>
    );
}

export default TodoList;