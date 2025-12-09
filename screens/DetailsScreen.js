import { View, Text } from 'react-native';
function DetailsScreen({ route }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>📄 Écran de détails</Text>
{route.params && <Text>ID reçu : {route.params.id}</Text>}
</View>
);
}
export default DetailsScreen;