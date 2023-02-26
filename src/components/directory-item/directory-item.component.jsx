import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemBackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <DirectoryItemBackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );

  // return (
  //   <div className="directory-item-container">
  //     <div
  //       className="background-image"
  //       style={{
  //         backgroundImage: `url(${imageUrl})`,
  //       }}
  //     ></div>
  //     <div className="directory-item-body">
  //       <h2>{title}</h2>
  //       <p>Shop now</p>
  //     </div>
  //   </div>
  // );
};

export default DirectoryItem;
