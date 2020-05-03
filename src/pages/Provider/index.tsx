import React, { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';

import api from '../../services/api';

import ItemSafe from '../../components/ItemSafe';

import {
  Container,
  ProviderWrapper,
  ProviderImageGradient,
  ProviderWrapperImage,
  ProviderImage,
  ProviderInfo,
  ProviderName,
  ProviderCategory,
  ProviderItemsSafe,
} from './styles';

type RootStackParamList = {
  Provider: { id: number };
};
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Provider'>;
type Props = {
  route: ProfileScreenRouteProp;
};

interface ItemSafeProps {
  title: string;
}

interface ProviderProps {
  title: string;
  items: ItemSafeProps[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

const Provider: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [provider, setProvider] = useState({} as ProviderProps);

  useEffect(() => {
    async function loadDetailsProvider(): Promise<void> {
      const response = await api.get<ProviderProps>(`providers/${id}`);
      setProvider(response.data);
    }

    loadDetailsProvider();
  }, [id]);

  return (
    <Container>
      {provider ? (
        <ProviderWrapper>
          <ProviderWrapperImage>
            <ProviderImage
              source={{ uri: provider.category && provider.category.image }}
              resizeMode="cover"
            >
              <ProviderImageGradient
                colors={[
                  'rgba(0, 0, 0, 0.1)',
                  'rgba(0, 0, 0, 0.3)',
                  'rgba(0, 0, 0, 0.8)',
                ]}
              />
            </ProviderImage>
          </ProviderWrapperImage>
          <ProviderInfo>
            <ProviderName>{provider.title}</ProviderName>
            <ProviderCategory>
              {provider.category && provider.category.name}
            </ProviderCategory>

            <ProviderItemsSafe
              data={provider.items}
              horizontal
              renderItem={({ item }) => <ItemSafe item={item} />}
              keyExtractor={(item) => item.title}
            />
          </ProviderInfo>
        </ProviderWrapper>
      ) : (
        <ProviderInfo />
      )}
    </Container>
  );
};

export default Provider;
