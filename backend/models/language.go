package models

type Language struct {
	ID         int    `json:"id"`
	Name       string `json:"name"`
	IsArchived bool   `json:"is_archived"`
}
