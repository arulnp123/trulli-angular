-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2023 at 06:58 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angulartruli`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_reports`
--

CREATE TABLE `all_reports` (
  `id` int(200) NOT NULL,
  `date` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_img` varchar(50) NOT NULL,
  `provider_name` varchar(20) NOT NULL,
  `provider_img` varchar(20) NOT NULL,
  `service` varchar(100) NOT NULL,
  `amount` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `updated` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `all_reports`
--

INSERT INTO `all_reports` (`id`, `date`, `user_name`, `user_img`, `provider_name`, `provider_img`, `service`, `amount`, `status`, `updated`) VALUES
(1, 'Wed Sep 16 2020 09:41:48 GMT+0530 (India Standard ', 'Jeffrey Akridge', 'assets/img/customer/user-01.jpg', 'Thomas Herzberg', 'assets/img/provider/', 'Toughened Glass Fitting Services', '$25', 'Pending', 'Today 01:38 PM');

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(200) NOT NULL,
  `service_name` varchar(200) NOT NULL,
  `img` varchar(200) NOT NULL,
  `provider_name` varchar(50) NOT NULL,
  `provider_img` varchar(100) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `booking_date` datetime(6) NOT NULL,
  `booking_time` datetime(6) NOT NULL,
  `phone` int(20) NOT NULL,
  `location` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `amount` int(20) NOT NULL,
  `option1` varchar(50) NOT NULL,
  `option2` varchar(50) NOT NULL,
  `option3` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `service_name`, `img`, `provider_name`, `provider_img`, `user_id`, `booking_date`, `booking_time`, `phone`, `location`, `status`, `amount`, `option1`, `option2`, `option3`) VALUES
(7, 'dcdf', 'assets/img/services/service-02.jpg', 'sdsdsd', 'sdsds', 'dsds', '2023-07-27 10:41:39.000000', '2023-07-28 10:41:39.000000', 54545, 'dvff', 'dgd', 356, 'xszc', 'vdvd', 'dss');

-- --------------------------------------------------------

--
-- Table structure for table `available_days`
--

CREATE TABLE `available_days` (
  `id` int(200) NOT NULL,
  `day` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `available_days`
--

INSERT INTO `available_days` (`id`, `day`) VALUES
(1, 'all days');

-- --------------------------------------------------------

--
-- Table structure for table `canceled_reports`
--

CREATE TABLE `canceled_reports` (
  `id` int(200) NOT NULL,
  `date` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_img` varchar(50) NOT NULL,
  `provider_name` varchar(20) NOT NULL,
  `provider_img` varchar(20) NOT NULL,
  `service` varchar(20) NOT NULL,
  `amount` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `updated` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `canceled_reports`
--

INSERT INTO `canceled_reports` (`id`, `date`, `user_name`, `user_img`, `provider_name`, `provider_img`, `service`, `amount`, `status`, `updated`) VALUES
(1, 'Wed Sep 11 2020 09:41:48 GMT+0530 (India Standard ', 'Stephen Wilson', 'assets/img/customer/user-06.jpg', 'Marya Ruiz', 'assets/img/provider/', 'Computer & Server AM', '$80', 'Canceled', 'Yesterday 01:03 PM');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(200) NOT NULL,
  `name` varchar(50) NOT NULL,
  `img` varchar(50) NOT NULL,
  `date` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `img`, `date`) VALUES
(1, 'Bus Service', '', ''),
(2, 'Computer', 'assets/img/category/category-01.jpg', 'Wed Se');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `comment` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`name`, `email`, `comment`) VALUES
('Michelle Fairfax', 'Fairfax@example.com\'', '\'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consecte');

-- --------------------------------------------------------

--
-- Table structure for table `completed_reports`
--

CREATE TABLE `completed_reports` (
  `id` int(200) NOT NULL,
  `date` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_img` varchar(50) NOT NULL,
  `provider_name` varchar(20) NOT NULL,
  `provider_img` varchar(20) NOT NULL,
  `service` varchar(20) NOT NULL,
  `amount` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `updated` varchar(20) NOT NULL,
  `type_name` varchar(20) NOT NULL,
  `ratings` varchar(20) NOT NULL,
  `commands` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `completed_reports`
--

INSERT INTO `completed_reports` (`id`, `date`, `user_name`, `user_img`, `provider_name`, `provider_img`, `service`, `amount`, `status`, `updated`, `type_name`, `ratings`, `commands`) VALUES
(1, 'Wed Sep 13 2020 09:41:48 GMT+0530 ', 'Ricardo Lung', 'assets/img/customer/user-04.jpg', 'Ricardo Flemings', 'assets/img/provider/', 'Steam Car Wash', '$45', 'Completed', 'Yesterday 01:29 PM', 'Normal', '4.0', 'Good Work');

-- --------------------------------------------------------

--
-- Table structure for table `inprogress_reports`
--

CREATE TABLE `inprogress_reports` (
  `id` int(200) NOT NULL,
  `date` varchar(20) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_img` varchar(50) NOT NULL,
  `provider_name` varchar(20) NOT NULL,
  `provider_img` varchar(20) NOT NULL,
  `service` varchar(20) NOT NULL,
  `amount` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `updated` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inprogress_reports`
--

INSERT INTO `inprogress_reports` (`id`, `date`, `user_name`, `user_img`, `provider_name`, `provider_img`, `service`, `amount`, `status`, `updated`) VALUES
(1, 'Wed Sep 14 2020 09:4', 'Ricardo Lung', 'assets/img/customer/user-03.jpg', 'Yolanda Potter', 'assets/img/provider/', 'Electric Panel Repai', '$45', 'Inprogress', 'Yesterday 01:31 PM');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(200) NOT NULL,
  `text` varchar(50) NOT NULL,
  `date` varchar(6) NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `text`, `date`, `img`) VALUES
(1, 'Jeffrey Akridge has booked your service', 'Wed Oc', 'assets/img/customer/user-01.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `pending_reports`
--

CREATE TABLE `pending_reports` (
  `id` int(200) NOT NULL,
  `date` varchar(6) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_img` varchar(50) NOT NULL,
  `provider_name` varchar(20) NOT NULL,
  `provider_img` varchar(20) NOT NULL,
  `service` varchar(20) NOT NULL,
  `amount` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `updated` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pending_reports`
--

INSERT INTO `pending_reports` (`id`, `date`, `user_name`, `user_img`, `provider_name`, `provider_img`, `service`, `amount`, `status`, `updated`) VALUES
(1, 'Wed Se', 'Nancy Olson', 'assets/img/customer/user-02.jpg', 'Matthew Garcia', 'assets/img/provider/', 'Car Repair Services', '$75', 'Pending', 'Yesterday 01:35 PM');

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `id` int(200) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `duration` time(6) NOT NULL,
  `expiry` time(6) NOT NULL,
  `start_date` datetime(6) NOT NULL,
  `end_date` datetime(6) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`id`, `name`, `price`, `duration`, `expiry`, `start_date`, `end_date`, `status`) VALUES
(1, 'Basic', '0.00', '00:00:03.000000', '00:00:00.000000', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 'paid');

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` int(200) NOT NULL,
  `commands` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`id`, `commands`, `status`) VALUES
(1, 'Good', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `rejected_reports`
--

CREATE TABLE `rejected_reports` (
  `id` int(200) NOT NULL,
  `date` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_img` varchar(50) NOT NULL,
  `provider_name` varchar(20) NOT NULL,
  `provider_img` varchar(20) NOT NULL,
  `service` varchar(20) NOT NULL,
  `amount` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `updated` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rejected_reports`
--

INSERT INTO `rejected_reports` (`id`, `date`, `user_name`, `user_img`, `provider_name`, `provider_img`, `service`, `amount`, `status`, `updated`) VALUES
(1, 'Wed Sep 13 2020 09:41:48 GMT+0530 (India Standard ', 'Annette Silvaw', 'assets/img/customer/user-05.jpg', 'Maritza Wasson', 'assets/img/provider/', 'House Cleaning Servi', '$100', 'Rejected', 'Yesterday 01:21 PM');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(200) NOT NULL,
  `service_img` varchar(200) NOT NULL,
  `user_img` varchar(200) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `ratings` int(20) NOT NULL,
  `description` varchar(225) NOT NULL,
  `date` datetime(6) NOT NULL,
  `commands` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `service_img`, `user_img`, `user_name`, `ratings`, `description`, `date`, `commands`) VALUES
(1, 'assets/img/services/service-08.jpg', 'assets/img/customer/user-01.jpg', 'Jeffrey Akridge', 5, 'Building Construction Services', '0000-00-00 00:00:00.000000', 'Good Work');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(100) NOT NULL,
  `service_img` varchar(50) NOT NULL,
  `user_img` varchar(50) NOT NULL,
  `service_name` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `country` varchar(20) NOT NULL,
  `amount` varchar(20) NOT NULL,
  `mobile` int(20) NOT NULL,
  `date` int(20) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_img`, `user_img`, `service_name`, `user_name`, `name`, `country`, `amount`, `mobile`, `date`, `status`) VALUES
(1, 'assets/img/services/service-01.jpg', 'assets/img/customer/user-01.jpg', 'Toughenedddd Glass Fitting Services', 'Jeffrey Akridge', 'Cleaning', 'Wayne, New Jersey ', '$25', 136632349, 0, 'User Rejected');

-- --------------------------------------------------------

--
-- Table structure for table `specialitylist`
--

CREATE TABLE `specialitylist` (
  `id` int(100) NOT NULL,
  `key` varchar(200) DEFAULT NULL,
  `speciality` varchar(200) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `ratings` varchar(100) DEFAULT NULL,
  `checked` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specialitylist`
--

INSERT INTO `specialitylist` (`id`, `key`, `speciality`, `date`, `img`, `ratings`, `checked`) VALUES
(1, '1', 'Computer', '0000-00-00 00:00:00.000000', 'assets/img/category/category-01.jpg', '21', 'true');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL,
  `date` varchar(50) NOT NULL,
  `provider_name` varchar(50) NOT NULL,
  `provider_img` varchar(50) NOT NULL,
  `subscription` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `mobile` int(50) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `date`, `provider_name`, `provider_img`, `subscription`, `email`, `mobile`, `status`) VALUES
(1, 'Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard ', 'Thomas Herzberg', 'assets/img/provider/provider-01.jpg', 'Enterprice', 'thomasherzberg@examp', 487232305, 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` int(200) NOT NULL,
  `name` varchar(50) NOT NULL,
  `cat_id` int(20) NOT NULL,
  `img` varchar(50) NOT NULL,
  `date` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `name`, `cat_id`, `img`, `date`) VALUES
(1, 'Bus Service', 7, 'assets/admin/img/sub-category/sub-category-01.jpg', 'Wed Se');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(200) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `wallet` varchar(50) NOT NULL,
  `credit` varchar(20) NOT NULL,
  `tax_amount` int(20) NOT NULL,
  `debit` varchar(20) NOT NULL,
  `available` varchar(20) NOT NULL,
  `reason` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `date`, `wallet`, `credit`, `tax_amount`, `debit`, `available`, `reason`, `status`) VALUES
(1, '1', '0000-00-00', '3486', '399', 0, '0', '388', 'Complete the Service', 'Credit');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(200) NOT NULL,
  `name` varchar(50) NOT NULL,
  `img` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `signup` varchar(20) NOT NULL,
  `last_login` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `img`, `email`, `mobile`, `signup`, `last_login`, `status`) VALUES
(1, 'Jeffrey Akridge', 'assets/img/customer/user-01.jpg', 'jeffreyakridge@example.com', '850-847-0459', 'Wed Sep 10 2020 09:4', 'Wed Sep 12 2020 09:4', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `wallet_history`
--

CREATE TABLE `wallet_history` (
  `id` int(200) NOT NULL,
  `date` varchar(50) NOT NULL,
  `img` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `current_amt` varchar(20) NOT NULL,
  `credit_amt` varchar(20) NOT NULL,
  `debit_amt` varchar(20) NOT NULL,
  `fee_amt` varchar(20) NOT NULL,
  `available_amt` varchar(20) NOT NULL,
  `reason` varchar(20) NOT NULL,
  `pay_type` varchar(20) NOT NULL,
  `role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wallet_history`
--

INSERT INTO `wallet_history` (`id`, `date`, `img`, `name`, `current_amt`, `credit_amt`, `debit_amt`, `fee_amt`, `available_amt`, `reason`, `pay_type`, `role`) VALUES
(1, 'Wed Jul 22 2020 09:41:48 GMT+0530 (India Standard ', 'assets/img/customer/user-01.jpg', 'Jeffrey Akridge', '1061', '-', '14', '-', '1047', 'Booked a Service', 'Debit', 'User');

-- --------------------------------------------------------

--
-- Table structure for table `wallet_report`
--

CREATE TABLE `wallet_report` (
  `id` int(200) NOT NULL,
  `date` varchar(50) NOT NULL,
  `img` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `amount` varchar(20) NOT NULL,
  `role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wallet_report`
--

INSERT INTO `wallet_report` (`id`, `date`, `img`, `name`, `mobile`, `amount`, `role`) VALUES
(1, 'Wed Sep 13 2020 09:41:48 GMT+0530 (India Standard ', 'assets/img/provider/provider-01.jpg', 'Thomas Herzberg', '832-212-0082', '3885', 'Provider');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_reports`
--
ALTER TABLE `all_reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `available_days`
--
ALTER TABLE `available_days`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `canceled_reports`
--
ALTER TABLE `canceled_reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `completed_reports`
--
ALTER TABLE `completed_reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inprogress_reports`
--
ALTER TABLE `inprogress_reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pending_reports`
--
ALTER TABLE `pending_reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rejected_reports`
--
ALTER TABLE `rejected_reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specialitylist`
--
ALTER TABLE `specialitylist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet_history`
--
ALTER TABLE `wallet_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet_report`
--
ALTER TABLE `wallet_report`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_reports`
--
ALTER TABLE `all_reports`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `available_days`
--
ALTER TABLE `available_days`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `canceled_reports`
--
ALTER TABLE `canceled_reports`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `completed_reports`
--
ALTER TABLE `completed_reports`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `inprogress_reports`
--
ALTER TABLE `inprogress_reports`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pending_reports`
--
ALTER TABLE `pending_reports`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rejected_reports`
--
ALTER TABLE `rejected_reports`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `specialitylist`
--
ALTER TABLE `specialitylist`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wallet_history`
--
ALTER TABLE `wallet_history`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wallet_report`
--
ALTER TABLE `wallet_report`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
