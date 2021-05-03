import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

import { List, Searchbar, IconButton } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const App = () => {
	const [listItem, setListItem] = useState([
		{
			id: 0,
			title: "Milk",
		},
		{
			id: 1,
			title: "Coffee",
		},
		{
			id: 2,
			title: "Oranges",
		},
		{
			id: 3,
			title: "Bread",
		},
		{
			id: 4,
			title: "Meat",
		},
	]);
	const [keyword, setKeyword] = useState("");

	const onChangeSearch = (query) => setKeyword(query);

	const handleAddItem = () => {
		const randomId = Math.random() * 10000;
		const newItem = {
			id: randomId,
			title: `Test item ${randomId}`,
		};

		setListItem([...listItem, newItem]);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Searchbar style={{ flex: 1 }} placeholder="Search" onChangeText={onChangeSearch} value={keyword} />
				<IconButton icon="plus" size={20} onPress={handleAddItem} />
			</View>
			<ScrollView style={{ width, paddingHorizontal: 20 }}>
				{listItem
					.filter((item) => item.title.includes(keyword))
					.map((item) => (
						<List.Item
							key={item.id}
							style={{
								borderBottomColor: "#000",
								borderBottomWidth: 1,
							}}
							title={item.title}
						/>
					))}
			</ScrollView>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
	header: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 40,
		paddingHorizontal: 20,
	},
});
