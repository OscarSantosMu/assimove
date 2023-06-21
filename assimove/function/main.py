import statistics
import folium
from sklearn.neighbors import BallTree
import numpy as np

# Let's say we have the following driver locations (latitude, longitude)
driver_locations = np.array(
    [
        [40.712776, -74.005974],  # New York
        [34.052235, -118.243683],  # Los Angeles
        [41.878113, -87.629799],  # Chicago
        [29.760427, -95.369804],  # Houston
    ]
)
# make a list of cities
cities = ["New York", "Los Angeles", "Chicago", "Houston"]

# And we have a rider at the following location
rider_location = np.array([[37.774929, -122.419418]])  # San Francisco

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
m = folium.Map(location=start_coords, zoom_start=4)

for i, location in enumerate(driver_locations):
    folium.Marker(location, popup=cities[i]).add_to(m)

folium.Marker(
    rider_location, icon=folium.Icon(color="red"), popup="San Francisco"
).add_to(m)

# Draw a line from rider to nearest driver
folium.PolyLine([rider_location[0], driver_locations[ind[0][0]]], color="blue").add_to(
    m
)

m.save("index.html")
