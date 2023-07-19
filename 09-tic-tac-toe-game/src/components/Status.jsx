import classes from '@/styles/Game.module.css';
import { string } from 'prop-types';

function Status({message}) {
  // console.log({message});
  return <h2 className={classes.Status}>{message}</h2>;
}

Status.propTypes = {
  message: string,
}

export default Status;
