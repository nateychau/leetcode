
#2 stacks, one to track history, one to track future
#current page is represented by history[-1]
class BrowserHistory:

    def __init__(self, homepage: str):
        self.history = [homepage]
        self.future = []

    def visit(self, url: str) -> None:
        self.history.append(url)
        self.future = []

    def back(self, steps: int) -> str:
        while steps and self.history:
            steps -= 1
            self.future.append(self.history.pop())
        
        #faster to do this extra step after clearing history instead of checking history length every loop
        if not self.history:
            self.history.append(self.future.pop())
            
        return self.history[-1]

    def forward(self, steps: int) -> str:
        while steps and self.future:
            steps -= 1
            self.history.append(self.future.pop())
        
        return self.history[-1]



##keep track of history with a list, resize when visiting
class BrowserHistory:

    def __init__(self, homepage: str):
        self.current = 0
        self.history = [homepage]

    def visit(self, url: str) -> None:
        self.history = self.history[:(self.current+1)]+[url]
        self.current = len(self.history) - 1

    def back(self, steps: int) -> str:
        while steps and self.current > 0:
            self.current -= 1
            steps -= 1
        return self.history[self.current]

    def forward(self, steps: int) -> str:
        while steps and self.current < len(self.history) - 1:
            self.current += 1
            steps -= 1
        return self.history[self.current]


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)