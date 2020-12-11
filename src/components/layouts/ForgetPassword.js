import React, {useEffect} from 'react';
import { Modal,Row, Col,Divider,Image,Typography   } from 'antd';
import JobLogo from '../ss/JobLogo.svg';
import styles from '../../globalStyle/customStyle.less';
import Login from '../registrationForms/Login';
import CreateAccount from '../registrationForms/CreateAccount';
import AccountType from '../registrationForms/AccountType';
import FreelancerDetails from '../registrationForms/FreelancerDetails';
import RegisterComplete from '../registrationForms/RegisterComplete';
import ResetPassword from '../registrationForms/ResetPassword';
import PasswordSent from '../registrationForms/PasswordSent';
import NewPassword from '../registrationForms/NewPassword';
import PasswordSuccess from '../registrationForms/PasswordSuccess';
import RegistrationDetails from '../registrationForms/RegistrationDetails';
import EmailActive from '../registrationForms/EmailActive';


const ForgetPassword =({match} )=> {
  const route =match.url.replace('/','');
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const { Title } = Typography;
    useEffect(() => {
      setVisible(true);  
      //eslint-disable-next-line         
  }, [])
    const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
    const leftStyle = {
      background:'#002333',
      margin:'10 auto',
      padding:'15% 5% 10% 5%',
      height: '568px',
    }
    const rightStyle ={
      background:'#F6F6F6',
      padding:'10% 5% 5% 5%',
      height: '568px',
    }
    const titleStyle = {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '22px',
      color: '#FFFFFF'
    }
    const subTitleStyle = {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '17px',
      color: '#FFFFFF'
    }
    const dividerStyle = {
      borderTop: '1px solid #FFFFFF',
      margin:'0px'
    }
  return (
      <div>
          <Modal
              centered
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              bodyStyle={{ padding: '0',width:'789px',maxWidth:'800px' }}
              footer={null}
              >
              <Row >
                <Col span={10} style={leftStyle}>
                    <Row gutter={[16,{ xs: 8, sm: 16, md: 18, lg: 18 }]}>
                      <Col className="gutter-row" span={24}>
                        <Image width={57} height={57} src={JobLogo} alt={'Job Logo'}/>
                      </Col>
                      <Col className="gutter-row" span={24}>
                        <Title style={titleStyle} className={styles.title}>Wachtwoord vergeten?<br/>Geen probleem!</Title>
                      </Col>
                      <Col className="gutter-row" span={24}>
                        <Divider style={dividerStyle}/>
                      </Col>
                      <Col className="gutter-row" span={24}>
                        <Title style={subTitleStyle}>Wij helpen u met het <br/>resetten van uw wachtwoord.</Title>
                      </Col>
                    </Row>
                  </Col>
                <Col span={14} style={rightStyle} >
                    {route==='forgetpassword' && <ResetPassword/>}
                    {route==='passwordsent' && <PasswordSent />}
                    {route==='newpassword' && <NewPassword/>}
                    {route==='resetcomplete' && <PasswordSuccess/>}
                </Col>
              </Row>
          </Modal>
    
    
      </div>
  )
}

export default ForgetPassword
