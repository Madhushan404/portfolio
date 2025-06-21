import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useThemeContext } from '../../theme/ThemeProvider';

const ProfileImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '15px',
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  borderRadius: '15px',
}));

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center center',
  display: 'block',
  borderRadius: '15px',
  backgroundSize: 'cover',
});

interface ProfileImageProps {
  imageSrc?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageSrc }) => {
  const { colorPalette } = useThemeContext();

  const defaultImage = "/images/user.png";
  
  return (
    <ProfileImageContainer >
      <ImageWrapper>
        <Image 
          src={defaultImage} 
          alt="Profile Picture"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = defaultImage;
          }}
        />
      </ImageWrapper>
    </ProfileImageContainer>
  );
};

export default ProfileImage; 