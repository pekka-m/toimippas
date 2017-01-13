import { createRouter } from '@exponent/ex-navigation';
import UkkelitContainer from './pages/ukkelit/UkkelitContainer';
import OneUkkeliContainer from './pages/one-ukkeli/OneUkkeliContainer';

export default createRouter(() => ({
  ukkelit: () => UkkelitContainer,
  ukkeli: () => OneUkkeliContainer,
}));
