
import styled from "@emotion/styled"; 

const ProfileContainer = styled.div`
 width: 400px;
 box-shadow: 14px 1px 42px -12px rgba(34, 60, 80, 0.41);
 padding: 20px 0 0 0;
 margin-top: 100px;
 margin-bottom: 100px;

`;

const Profiledescription = styled.div`
 align-items: center;
 display: flex;
 flex-direction: column;
 gap: 15px;
 margin-bottom: 25px;

`

const UserIcon = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;

`;

const UserName = styled.p`
 font-weight: 700;
`;

const UserData = styled.p`
  color: grey;
`;

const UserStatisticName = styled.span`
 color: grey;
`;

const UserStatisticValue = styled.span`
 font-weight: 700;
`;

const Stats = styled.ul`
 display: flex;
 alight-item: center;
 gap: 25px
 text-align: center;
 background-color: #d3d3d3;
`;

const StatsItem = styled.li`
 display: flex;
 flex-direction: column;
 justify-content: center;
 flex-basis: 33.33333%;
 gap: 10px;
 text-align: center;
 padding: 20px 10px;

 border-top: 1px solid #909ba7;
 border-bottom: 1px solid #909ba7;
 

  &:not(:last-child) {
    border-right: 1px solid #909ba7;
  }


`;

export  {UserIcon, UserName, UserData, UserStatisticName, UserStatisticValue, ProfileContainer, Profiledescription, Stats, StatsItem}