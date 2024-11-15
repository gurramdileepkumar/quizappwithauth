import React from 'react'
import Card from '../../components/ui/Card'
import Trainee from '../Trainee';
import AddNewQuestions from './AddNewQuestions'
import classes from './Trainer.module.css';

const Trainer = () => {
  return (
    <React.Fragment>
    <Card className={classes.home}>
        <AddNewQuestions />
    </Card>
        <Trainee />
    </React.Fragment>
  )
}

export default Trainer
