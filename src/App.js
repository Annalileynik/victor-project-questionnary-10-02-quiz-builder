import {useState} from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img4.png';
import img6 from './images/img6.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [mail, setMail] = useState("")


    const steps = [
        {
            id: 1,
            title: 'Step 1',
            type: 'textAnswers',
            content: 'What do you prefer drinking?',
            options: [
                {id: 1, title: 'Choice1', content: 'Coffee'},
                {id: 2, title: 'Choice2', content: 'Tee'},
            ]
        },
        {
            id: 2,
            title: 'Step 2',
            type: 'image2',
            content: 'Please, choose a picture',
            options: [
                {id: 1, title: 'Picture1', imagePath: img1},
                {id: 2, title: 'Picture2', imagePath: img2},
            ]
        },
        {
            id: 3,
            title: 'Step 3',
            type: 'image2',
            content: 'What do you prefer eating?',
            options: [
                {id: 1, title: 'Option1', imagePath: img3},
                {id: 2, title: 'Option2', imagePath: img4},
                {id: 3, title: 'Option3', imagePath: img5},
                {id: 4, title: 'Option4', imagePath: img6},
            ]
        },
        {
            id: 4,
            title: 'Step 4',
            type: 'textAnswers2',
            content: 'Give me contact-iformation',
            options: [
                {id: 1, name: 'Name:', contact: 'Phone:', mail: 'e-mail:'},
            ]
        },
    ];


    const optionClick = (option, stepId) => {
        console.log(option, stepId);
        setCurrentStep(stepId + 1)
    }
    const changeName = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div>
            {steps.map((step) => (
                <div key={step.id}>
                    {step.id === currentStep &&

                        <Card sx={{maxWidth: 345}}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <div>
                                        <h3>{step.title}</h3>
                                        <div>{step.content}
                                            <br/>
                                        </div>
                                        <hr/>
                                        {step.type === 'textAnswers' &&


                                            <div>
                                                {step.options.map((option) => (
                                                    <div key={option.id} onClick={() => optionClick(option, step.id)}>
                                                        <h4>{option.title}</h4>
                                                        <div>{option.content}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {step.type === 'image2' &&
                                            <div>
                                                {step.options.map((option) => (
                                                    <div key={option.id} onClick={() => optionClick(option, step.id)}>
                                                        <h4>{option.title}</h4>
                                                        <img src={option.imagePath} alt={option.title} width={200}/>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {step.type === 'textAnswers2' &&
                                            <div>
                                                {step.options.map((option) => (
                                                    <div key={option.id}>
                                                        <h4>
                                                            {option.name}
                                                            <input value={name} onChange={changeName}/>
                                                        </h4>
                                                        <h4>
                                                            {option.contact}
                                                            <input value={contact}
                                                                   onChange={event => setContact(event.target.value)}/>
                                                        </h4>
                                                        <h4>
                                                            {option.mail}
                                                            <input value={mail}
                                                                   onChange={event => setMail(event.target.value)}/>


                                                        </h4>
                                                        <hr/>
                                                        Thank you!
                                                        <br/>
                                                        Dear <u>{name} </u>we are gonna send you information
                                                        to e-mail:<u> {mail} </u> or call you on phone:<u> {contact}</u>
                                                        <Stack sx={{width: '100%', color: 'grey.500'}} spacing={2}>
                                                            <LinearProgress color="secondary"/>
                                                            <LinearProgress color="success"/>
                                                            <LinearProgress color="inherit"/>
                                                        </Stack>
                                                    </div>
                                                ))}
                                            </div>
                                        }


                                    </div>
                                </Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    }
                </div>
            ))}

        </div>
    );
}

export default App;