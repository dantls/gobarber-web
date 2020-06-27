import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  NextAppointment,
  Appointment,
  Calendar,
  Schedule,
  Section,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 27</span>
            <span>Sábado</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/51554360?s=460&u=2cf2e22f5343837c6efb95259f4707bc492e5dc5&v=4"
                alt="Danilo Gomes"
              />
              <strong>Danilo Gomes</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/51554360?s=460&u=2cf2e22f5343837c6efb95259f4707bc492e5dc5&v=4"
                  alt="Danilo Gomes"
                />
                <strong>Danilo Gomes</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/51554360?s=460&u=2cf2e22f5343837c6efb95259f4707bc492e5dc5&v=4"
                  alt="Danilo Gomes"
                />
                <strong>Danilo Gomes</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/51554360?s=460&u=2cf2e22f5343837c6efb95259f4707bc492e5dc5&v=4"
                  alt="Danilo Gomes"
                />
                <strong>Danilo Gomes</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/51554360?s=460&u=2cf2e22f5343837c6efb95259f4707bc492e5dc5&v=4"
                  alt="Danilo Gomes"
                />
                <strong>Danilo Gomes</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/51554360?s=460&u=2cf2e22f5343837c6efb95259f4707bc492e5dc5&v=4"
                  alt="Danilo Gomes"
                />
                <strong>Danilo Gomes</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};
export default Dashboard;
