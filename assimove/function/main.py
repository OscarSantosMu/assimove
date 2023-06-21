import statistics
import folium
from sklearn.neighbors import BallTree
import numpy as np

lat, lon = input("Enter your location: ").split(",")

# Let's say we have the following driver locations (latitude, longitude)
driver_locations = np.array(
    [
        [19.014245, -98.246697],  # Imperio Nórdico Parque Metropolitano
        [19.038105, -98.213612],  # Facultad de Medicina BUAP
        [19.118978, -98.255183],  # Volkswagen
        [19.03334, -98.233729],  # Plaza Angelópolis
        [19.071305, -98.202109],  # Central de Autobuses CAPU
        [19.019684, -98.198403],  # Walmart San Manuel
        [float(lat), float(lon)],  # Invernadero Cuetzalan
    ]
)
# make a list of places
places = [
    "Imperio Nórdico Parque Metropolitano",
    "Facultad de Medicina BUAP",
    "Volkswagen",
    "Plaza Angelópolis",
    "Central de Autobuses CAPU",
    "Walmart San Manuel",
    "Invernadero Cuetzalan",
]

# And we have a rider at the following location
rider_location = np.array([[19.017313, -98.240803]])  # ITESM Campus Puebla

# Create a BallTree with the driver locations
tree = BallTree(driver_locations, leaf_size=2)

# Find the index of the nearest driver
dist, ind = tree.query(rider_location, k=1)

# Print the location of the nearest driver
print(f"The nearest driver is at location {driver_locations[ind]}")

# Calculate the mean of the coordinates
mean_lat = statistics.mean(lat for lat, lon in driver_locations)
mean_lon = statistics.mean(lon for lat, lon in driver_locations)

start_coords = (mean_lat, mean_lon)
m = folium.Map(location=start_coords, zoom_start=13)

for i, location in enumerate(driver_locations):
    folium.Marker(
        location, popup=places[i], icon=folium.Icon(icon="car", prefix="fa")
    ).add_to(m)

folium.Marker(
    rider_location,
    icon=folium.Icon(color="red", icon="person", prefix="fa"),
    popup="ITESM Campus Puebla",
).add_to(m)

# Draw a line from rider to nearest driver
folium.PolyLine([rider_location[0], driver_locations[ind[0][0]]], color="blue").add_to(
    m
)

m.save("index.html")
