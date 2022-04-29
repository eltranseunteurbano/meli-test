import WhiteCard from '../../../components/WhiteCard';

const EmptyState = () => {
  return (
    <WhiteCard className="main-page empty-state">
      <img className="empty-state-img" src="./assets/buy.svg" alt="Comprar ilustración" width={300} height={300} />
      <p className="empty-state-title">¡Anímate a buscar ese antojo que tanto quieres!</p>
      <p className="empty-state-subtitle">Nosotros nos encargamos de dejartelo en la puerta de tu casa</p>
    </WhiteCard>
  );
};

export default EmptyState;
