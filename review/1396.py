#1396. Design Underground system

# Implement the UndergroundSystem class:

# void checkIn(int id, string stationName, int t)
# A customer with a card id equal to id, gets in the station stationName at time t.
# A customer can only be checked into one place at a time.
# void checkOut(int id, string stationName, int t)
# A customer with a card id equal to id, gets out from the station stationName at time t.
# double getAverageTime(string startStation, string endStation)
# Returns the average time to travel between the startStation and the endStation.
# The average time is computed from all the previous traveling from startStation to endStation that happened directly.
# Call to getAverageTime is always valid.
# You can assume all calls to checkIn and checkOut methods are consistent. If a customer gets in at time t1 at some station, they get out at time t2 with t2 > t1. All events happen in chronological order.



#two hash maps:
  # - one to store active trips - passenger id key, (origin, start_time) value tuple 
  # - one to store completed trips by route - (origin, destination) tuple key, list of trip durations list value

#all constant time operations
#space: ~size of active trips + completed trips 
class UndergroundSystem:

    def __init__(self):
        self.journeys = {}
        # {
        #     id: (origin, start_time)
        # }

        self.routes = {}
        # {
        #     (origin, destination) = [trip_duration_a, trip_duration_b, ...]
        # }

    #journeys will always be overwritten when a passenger starts a new trip
    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.journeys[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        origin_station = self.journeys[id][0]
        origin_time = self.journeys[id][1]

        if (origin_station, stationName) in self.routes:
            self.routes[(origin_station, stationName)].append(t - origin_time)
        else:
            self.routes[(origin_station, stationName)] = [(t - origin_time)]

    #find average by summing list of durations, and dividing by length
    def getAverageTime(self, startStation: str, endStation: str) -> float:
        return sum(self.routes[(startStation, endStation)])/len(self.routes[(startStation, endStation)])
