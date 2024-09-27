package com.lead.entity;

import java.math.BigDecimal;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Items")
public class Items {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "items_id")
	private Integer itemsId; // 기본 키

    @ManyToOne
    @JoinColumn(name = "category3_id", nullable = false)
    private Category3 category3;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Member member;

    @Column(name = "item_name", nullable = false)
    private String itemName;
    
    @Column(nullable = false)
    private String part1;
    
    @Column(nullable = false)
    private String part2;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    @Column(nullable = false)
    private String unit;
    
    @Column(name = "purchase_count", nullable = false)
    private int purchaseCount; 
    
    @Column(name = "enabled", nullable = false)
    private boolean enabled;
    
    @Column(name = "for_sale", nullable = false)
    private boolean forSale; 

    @OneToMany(mappedBy = "items")
    private Set<Leadtime> leadtimes;

}