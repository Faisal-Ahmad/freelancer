import React, {useEffect} from 'react';
import { Modal,Row, Col,Divider,Image,Typography   } from 'antd';
import JobLogo from '../ss/JobLogo.svg';
import styles from '../../globalStyle/customStyle.less';
import CreateAccount from '../registrationForms/CreateAccount';
import AccountType from '../registrationForms/AccountType';
import RegisterDetails from '../registrationForms/RegisterDetails';
import RegisterComplete from '../registrationForms/RegisterComplete';
import ResetPassword from '../registrationForms/ResetPassword';
import EmailSuccess from '../registrationForms/EmailSuccess';
import NewPassword from '../registrationForms/NewPassword';
import PasswordSuccess from '../registrationForms/PasswordSuccess';
import RegistrationDetails from '../registrationForms/RegistrationDetails';
import EmailActive from '../registrationForms/EmailActive';


const NewRegister =()=> {
  console.log('Working');
  console.log(styles.title);
  console.log('End');
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
        padding:'15% 20px',
        height: '520px',
      }
      const rightStyle ={
        background:'#F6F6F6',
        padding:'10% 5% 5% 5%',
        height: '520px',
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
                    <Image
                      width={57}
                      height={57}
                      src={JobLogo}
                      alt={'Job Logo'}
                    />
                     <Title style={titleStyle} className={styles.title}>Welkom bij Job.nl</Title>
                     <Divider style={dividerStyle}/>
                     <Title style={subTitleStyle}>Log in om verder te gaan!</Title>
                    </Col>
                  <Col span={14} style={rightStyle}>
                    <EmailActive/>
                  </Col>
                </Row>
            </Modal>
      
      
        </div>
    )

}

export default NewRegister
