import React, { useEffect, useState } from 'react';
import { Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { RouteProp } from '@react-navigation/native';

import axios from 'axios';
import api from '../../services/api';

import ItemSafe from '../../components/ItemSafe';
import RatingSafe from '../../components/RatingSafe';
import InformationProvider from '../../components/InformationProvider';

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
  InformationTitle,
  Hr,
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
  rating: number;
  address: string;
  district: string;
  number: string;
  location: string;
  whatsapp: string;
  phone: string;
  url_page_promotion: string;
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

  function doCall(phone: string): void {
    Linking.openURL(`tel:${phone}`);
  }

  async function sendMessage(wpp: string): Promise<void> {
    await axios.get(`https://api.whatsapp.com/send?phone=${wpp}`);
  }

  function openSite(siteUrl: string): void {
    Linking.openURL(siteUrl);
  }

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
              >
                <RatingSafe rating={provider.rating} />
              </ProviderImageGradient>
            </ProviderImage>
          </ProviderWrapperImage>

          <ProviderInfo>
            <ProviderName>{provider.title}</ProviderName>
            <ProviderCategory>
              {provider.category && provider.category.name}
            </ProviderCategory>

            <ProviderItemsSafe
              data={provider.safe_items}
              horizontal
              renderItem={({ item }) => <ItemSafe item={item} />}
              keyExtractor={(item) => item.title}
            />

            <InformationTitle>Informações</InformationTitle>
            <InformationProvider
              text="Endereço"
              value={`${provider.address}, ${provider.number}`}
            />
            <InformationProvider text="Bairro" value={provider.district} />
            <InformationProvider text="Localidade" value={provider.location} />

            <Hr />

            <InformationTitle>Contato</InformationTitle>
            <TouchableOpacity onPress={() => sendMessage(provider.whatsapp)}>
              <InformationProvider
                text="WhatsApp"
                value={provider.whatsapp}
                icon="whatsapp"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => doCall(provider.phone)}>
              <InformationProvider
                text="Telefone"
                value={provider.phone}
                icon="phone"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openSite(provider.url_page_promotion)}
            >
              <InformationProvider
                text="Site"
                value={provider.url_page_promotion}
                icon="desktop"
              />
            </TouchableOpacity>
          </ProviderInfo>
        </ProviderWrapper>
      ) : (
        <ProviderInfo>
          <Text>Carregando...</Text>
        </ProviderInfo>
      )}
    </Container>
  );
};

export default Provider;
