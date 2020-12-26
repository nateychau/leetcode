# 207. Course Schedule
# There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

# Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

# Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

# Example 1:

# Input: numCourses = 2, prerequisites = [[1,0]]
# Output: true
# Explanation: There are a total of 2 courses to take. 
#              To take course 1 you should have finished course 0. So it is possible.
# Example 2:

# Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
# Output: false
# Explanation: There are a total of 2 courses to take. 
#              To take course 1 you should have finished course 0, and to take course 0 you should
#              also have finished course 1. So it is impossible.
 

# Constraints:

# The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
# You may assume that there are no duplicate edges in the input prerequisites.
# 1 <= numCourses <= 10^5


# DFS with a recursive set to detect cycles:
class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: bool
        """
        graph = {}
        for tuple in prerequisites:
            graph[tuple[0]] = graph[tuple[0]] + [tuple[1]] if tuple[0] in graph else [tuple[1]]
        
        count = numCourses
        
        visited, recVisited = set(), set()
        for node in graph:
            if node not in visited:
                if self.containsCycle(graph, node, visited, recVisited):
                    return False
        

        return True
                              
        
    def containsCycle(self, graph, node, visited, recVisited):
        visited.add(node)
        recVisited.add(node)
        
        neighbors = graph[node] if node in graph else []
        for neighbor in neighbors:
            if neighbor not in visited:
                if self.containsCycle(graph, neighbor, visited, recVisited):
                    return True
            elif neighbor in recVisited:
                return True
        
        recVisited.remove(node)
        return False


# Topological sort - count number of indegrees (prereqs) for each course
# - add courses without prereqs to a stack
# - pop course from stack, and decrement # of prereqs for each class that needs 'course' as prereq
# - if a class now has 0 prereqs, add it to stack. keep repeating until stack is empty
# - compare number of classes taken to numCourses

class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: bool
        """
       
        indegrees = [0] * numCourses
        for tuple in prerequisites:
            indegrees[tuple[0]] += 1
        
        visitable = [i for i, val in enumerate(indegrees) if val == 0]
        
        
        classes_taken = 0
        while visitable:
            prereq = visitable.pop(0)
            classes_taken += 1
            for course in [tuple[0] for tuple in prerequisites if tuple[1] == prereq]: #theres probably a way to save this so that a new list does not need to be generated each time
                indegrees[course] -= 1
                if indegrees[course] == 0:
                    visitable.append(course)
        
        return classes_taken == numCourses