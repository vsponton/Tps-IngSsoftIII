package main

import (
	"backend/db"
	"backend/router"

	"github.com/gin-gonic/gin"
)

func main() {
	db.StartDbEngine()
	engine := gin.New()
	router.MapUrls(engine)
	engine.Run(":8080")

}
