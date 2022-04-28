import { Link } from 'react-router-dom';
import WhiteCard from '../../../components/WhiteCard';

interface ErrorStateProps {}

const ErrorState: React.FC<ErrorStateProps> = () => {
  return (
    <WhiteCard className="main-page error-view">
      <p className="error-view-title">Tuvimos un problema.</p>
      <Link to="/" className="error-view-link">Volver al inicio</Link>
    </WhiteCard>
  );
};

export default ErrorState;
