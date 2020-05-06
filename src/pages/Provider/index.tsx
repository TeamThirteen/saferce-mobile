import React, { useEffect, useState, useCallback } from 'react';
import {
  Linking,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { RouteProp, useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import ItemSafe from '../../components/ItemSafe';
import RatingSafe from '../../components/RatingSafe';
import InformationProvider from '../../components/InformationProvider';

import { useAuth } from '../../hooks/auth';

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
  Separator,
  ButtonBack,
  InformationsItens,
} from './styles';

type RootStackParamList = {
  Provider: { id: number };
};
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Provider'>;
type Props = {
  route: ProfileScreenRouteProp;
};

interface ItemSafeProps {
  description: string;
  id: number;
  icon: string;
  color: string;
}

interface CategoryProps {
  id: number;
  description: string;
  image_url: string;
}

interface ProviderProps {
  title: string;
  rating: number;
  address: string;
  district: string;
  number: string;
  city: string;
  state: string;
  whatsapp: string;
  phone: string;
  url_page_promotion: string;
  category: CategoryProps;
  safe_items: ItemSafeProps[];
}

const Provider: React.FC<Props> = ({ route }) => {
  const { id } = route.params;

  const { token } = useAuth();
  const navigation = useNavigation();
  const [provider, setProvider] = useState({} as ProviderProps);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadDetailsProvider = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.get<ProviderProps>(`providers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProvider(response.data);
      setRefreshing(false);
    } catch (err) {
      Alert.alert(
        'Ooops!',
        'Houve um erro ao carregar as informações do provedor.',
      );

      navigation.goBack();
    } finally {
      setLoading(false);
    }
  }, [id, token, navigation]);

  const onRefreshing = useCallback(() => {
    setRefreshing(true);
    loadDetailsProvider();
  }, [loadDetailsProvider]);

  useEffect(() => {
    loadDetailsProvider();
  }, [loadDetailsProvider]);

  const doCall = useCallback((phone: string) => {
    Linking.openURL(`tel:${phone}`);
  }, []);

  const sendMessage = useCallback(async (wpp: string) => {
    Linking.openURL(`whatsapp://send?text=Oi&phone=55${wpp}`);
  }, []);

  const openSite = useCallback((siteUrl: string) => {
    Linking.openURL(siteUrl);
  }, []);

  return (
    <Container
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
      refreshControl={
        <RefreshControl
          progressViewOffset={30}
          colors={['transparent', '#0000FF']}
          refreshing={refreshing}
          onRefresh={onRefreshing}
        />
      }
    >
      {!loading ? (
        <ProviderWrapper>
          <ProviderWrapperImage>
            <ProviderImage
              source={{ uri: provider.category && provider.category.image_url }}
              resizeMode="cover"
            >
              <ProviderImageGradient
                colors={[
                  'rgba(0, 0, 0, 0.1)',
                  'rgba(0, 0, 0, 0.3)',
                  'rgba(0, 0, 0, 0.8)',
                ]}
              >
                <ButtonBack onPress={() => navigation.goBack()}>
                  <Icon name="arrow-left" size={18} color="#FFFFFF" />
                </ButtonBack>
                <RatingSafe rating={provider.rating} />
              </ProviderImageGradient>
            </ProviderImage>
          </ProviderWrapperImage>

          <ProviderInfo>
            <InformationsItens>
              <ProviderName>{provider.title}</ProviderName>
              <ProviderCategory>
                {provider.category && provider.category.description}
              </ProviderCategory>
            </InformationsItens>

            <Separator />

            {provider.safe_items &&
              Object.keys(provider.safe_items).length > 0 && (
                <>
                  <InformationTitle>Itens</InformationTitle>

                  <ProviderItemsSafe
                    data={provider.safe_items}
                    horizontal
                    renderItem={({ item }) => <ItemSafe item={item} />}
                    keyExtractor={(item) => item.description}
                  />
                </>
              )}

            <InformationTitle>Informações</InformationTitle>

            <InformationsItens>
              <InformationProvider
                text="Endereço"
                value={`${provider.address}, ${provider.number}`}
              />
              <InformationProvider text="Bairro" value={provider.district} />
              <InformationProvider
                text="Localidade"
                value={`${provider.city}, ${provider.state}`}
              />
            </InformationsItens>

            <Separator />

            <InformationTitle>Contato</InformationTitle>

            <InformationsItens>
              <TouchableOpacity onPress={() => sendMessage(provider.whatsapp)}>
                <InformationProvider
                  text="WhatsApp"
                  value={provider.whatsapp}
                  icon="whatsapp"
                  iconWhite
                  color="#25d366"
                  size={30}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => doCall(provider.phone)}>
                <InformationProvider
                  text="Telefone"
                  value={provider.phone}
                  icon="phone"
                  iconWhite
                  color="#34b7f1"
                  size={22}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => openSite(provider.url_page_promotion)}
              >
                <InformationProvider
                  text="Site"
                  value={provider.url_page_promotion}
                  color="#f5b971"
                  icon="desktop"
                  iconWhite
                />
              </TouchableOpacity>
            </InformationsItens>
          </ProviderInfo>
        </ProviderWrapper>
      ) : (
        <ProviderInfo>
          <ActivityIndicator color="#C7C7C7" />
        </ProviderInfo>
      )}
    </Container>
  );
};

export default Provider;
