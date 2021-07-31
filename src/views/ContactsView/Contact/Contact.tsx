import { faComments, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import COLOUR from 'constants/colour';
import React from 'react';
import styled from 'styled-components';

type ContactProps = {};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WrapperContent = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperContentRight = styled(WrapperContent)`
  font-size: 18px;

  & > * {
    margin-left: 36px;
  }
`;

const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: red;
`;

const UserData = styled.div`
  margin-left: 28px;
`;

const UserName = styled.h1`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 4px;
`;

const UserStatus = styled.p`
  font-size: 14px;
  color: ${COLOUR.foreground2};
`;

const Indicator = styled.div`
  height: 70px;
  width: 7px;
  border-radius: 12px 0 0 12px;
  background-color: ${COLOUR.red};
`;

const Contact: React.FC<ContactProps> = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <Avatar />
        <UserData>
          <UserName>Name Surname</UserName>
          <UserStatus>Active now</UserStatus>
        </UserData>
      </WrapperContent>
      <WrapperContentRight>
        <div>
          <FontAwesomeIcon icon={faComments} />
        </div>
        <div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <Indicator />
      </WrapperContentRight>
    </Wrapper>
  );
};

export default Contact;
